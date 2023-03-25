export interface MenuItem {
    text: string;
    custom?: Boolean,
    position?: string;
    children?: MenuItem[];
}
