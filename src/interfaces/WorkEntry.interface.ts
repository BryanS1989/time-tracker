import type Coordinates from "@/interfaces/Coordinates.interface";

import type { Origin } from "@/Enums/enums";

export default interface WorkEntry {
    origin: Origin;
    date: Date;
    coordinates: Coordinates;
}
