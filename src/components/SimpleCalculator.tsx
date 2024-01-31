import { useStore } from "@/store";
import { Button, Grid } from "@mantine/core";
import { IconBackspace, IconDivide, IconEqual, IconMinus, IconPlus, IconPlusMinus, IconSquareRoot2, IconSuperscript, IconX } from "@tabler/icons-react";

export const SimpleCalculator = () => {
    const { addNum, deleteLast } = useStore();
    return (
        <Grid mt="lg">
            <Grid.Col span={3}>
                <Button fullWidth>%</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button fullWidth>CE</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button fullWidth>C</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button onClick={deleteLast} fullWidth>
                    <IconBackspace />
                </Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button fullWidth>1 / x</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button fullWidth>
                    <IconSuperscript />
                </Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button fullWidth>
                    <IconSquareRoot2 />
                </Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button fullWidth>
                    <IconDivide />
                </Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button onClick={() => addNum(7)} fullWidth>7</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button onClick={() => addNum(8)} fullWidth>8</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button onClick={() => addNum(9)} fullWidth>9</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button fullWidth>
                    <IconX />
                </Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button onClick={() => addNum(4)} fullWidth>4</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button onClick={() => addNum(5)} fullWidth>5</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button onClick={() => addNum(6)} fullWidth>6</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button fullWidth>
                    <IconMinus />
                </Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button onClick={() => addNum(1)} fullWidth>1</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button onClick={() => addNum(2)} fullWidth>2</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button onClick={() => addNum(3)} fullWidth>3</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button fullWidth>
                    <IconPlus />
                </Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button fullWidth>
                    <IconPlusMinus />
                </Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button onClick={() => addNum(0)} fullWidth>0</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button fullWidth>.</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button fullWidth>
                    <IconEqual />
                </Button>
            </Grid.Col>
        </Grid>
    );
};