import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import type Employee from '@/interfaces/Employee.interface';
import type WorkEntry from '@/interfaces/WorkEntry.interface';
import axios from '@/plugins/axios';

export const usetimeTrackerStore = defineStore('timeTracker', () => {
    const workEntryData = reactive({
        employee: {} as Employee,
        clockIn: {} as WorkEntry,
        clockOut: {} as WorkEntry,
    });

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    const userId = computed(() => {
        console.log('[STORE] [usetimeTrackerStore] [userId] user id: ', workEntryData.employee.id);
        return workEntryData.employee.id;
    });

    const userName = computed(() => {
        const userName = workEntryData.employee.lastName
            ? workEntryData.employee.firstName + ' ' + workEntryData.employee.lastName
            : workEntryData.employee.firstName;

        console.log('[STORE] [usetimeTrackerStore] [userName] user name: ', userName);

        return userName;
    });

    const userStatus = computed(() => {
        console.log(
            '[STORE] [usetimeTrackerStore] [userStatus] status: ',
            workEntryData.employee.workStatus
        );
        return workEntryData.employee.workStatus;
    });

    function getWorkEntries() {
        console.log('[STORE] [usetimeTrackerStore] [getWorkEntries]');

        return axios
            .getWorkEntrie()
            .then((response) => {
                console.log(
                    '[STORE] [usetimeTrackerStore] [getWorkEntries] response: ',
                    response.data
                );

                const lastEntry = response.data.data[response.data.data.length - 1];

                workEntryData.employee = lastEntry.employee;
                workEntryData.clockIn = lastEntry.workEntryIn;
                workEntryData.clockOut = lastEntry.workEntryOut;
            })
            .catch((error) => {
                console.log('[STORE] [usetimeTrackerStore] [getWorkEntries] error: ', error);
            });
    }

    function clockIn() {
        console.log('[STORE] [usetimeTrackerStore] [clockIn]');

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const coordinates = position.coords;

                const data = {
                    employeeId: userId.value,
                    workEntryIn: {
                        coordinates: {
                            latitude: coordinates.latitude,
                            longitude: coordinates.longitude,
                        },
                    },
                };

                axios
                    .PostWorkEntry('/clock-in', data)
                    .then((response) => {
                        console.log('[usetimeTrackerStore] [postEntry] response: ', response);

                        getWorkEntries();
                    })
                    .catch((error) => {
                        console.log('[usetimeTrackerStore] [postEntry] error: ', error);
                    });
            },
            (err) => {
                alert(`Error getting coordinates: (${err.code}): ${err.message}`);
            },
            options
        );
    }

    function clockOut() {
        console.log('[STORE] [usetimeTrackerStore] [clockOut]');

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const coordinates = position.coords;

                const data = {
                    employeeId: userId.value,
                    workEntryOut: {
                        coordinates: {
                            latitude: coordinates.latitude,
                            longitude: coordinates.longitude,
                        }
                    },
                };

                axios
                    .PostWorkEntry('clock-out', data)
                    .then((response) => {
                        console.log('[usetimeTrackerStore] [postEntry] response: ', response);

                        getWorkEntries();
                    })
                    .catch((error) => {
                        console.log('[usetimeTrackerStore] [postEntry] error: ', error);
                    });
            },
            (err) => {
                alert(`Error getting coordinates: (${err.code}): ${err.message}`);
            },
            options
        );
    }

    return {
        userName,
        userStatus,
        clockIn,
        clockOut,
        getWorkEntries,
    };
});
