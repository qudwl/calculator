import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

export const DarkModeToggle = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    return (
        <ActionIcon variant='default' size="lg" radius="xl" onClick={toggleColorScheme}>
            {colorScheme === "dark" ? <IconMoonFilled /> : <IconSunFilled />}
        </ActionIcon>
    );
};