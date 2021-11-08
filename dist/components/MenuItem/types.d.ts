import { Colors } from "../../theme";
export declare type MenuItemVariant = "default" | "subMenu";
export interface MenuItemProps {
    isActive?: boolean;
    isMain?: boolean;
    href: string;
    variant?: MenuItemVariant;
    statusColor?: keyof Colors;
}
export declare type StyledMenuItemProps = {
    $isActive?: boolean;
    $variant?: MenuItemVariant;
    $statusColor?: keyof Colors;
    $isMain?: boolean;
};
