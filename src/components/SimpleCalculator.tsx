import { useStore } from "@/store";
import { Button, Grid } from "@mantine/core";
import { IconBackspace, IconDivide, IconEqual, IconMinus, IconParentheses, IconPlus, IconSquareRoot2, IconSuperscript, IconX } from "@tabler/icons-react";

export const SimpleCalculator = () => {
    const { addNum, deleteLast, addOperator, addPower, solve, clear, makeDenom } = useStore();
    return (
        <Grid mt="lg">
            <Grid.Col span={3}>
                <Button onClick={() => addOperator('%')} fullWidth>%</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button onClick={clear} fullWidth>CE</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button onClick={clear} fullWidth>C</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button onClick={deleteLast} fullWidth>
                    <IconBackspace />
                </Button>
            </Grid.Col>
            <Grid.Col span={4}>
                <Button onClick={() => addPower(2)} fullWidth aria-label="Square">
                    <IconSuperscript />
                </Button>
            </Grid.Col>
            <Grid.Col span={4}>
                <Button onClick={() => addPower(0.5)} fullWidth aria-label="Square Root">
                    <IconSquareRoot2 />
                </Button>
            </Grid.Col>
            <Grid.Col span={4}>
                <Button onClick={() => addOperator('/')} fullWidth aria-label="divide">
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
                <Button onClick={() => addOperator('*')} fullWidth aria-label="multiply">
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
                <Button onClick={() => addOperator('-')} fullWidth>
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
                <Button onClick={() => addOperator("+")} fullWidth>
                    <IconPlus />
                </Button>
            </Grid.Col>
            <Grid.Col span={6}>
                <Button onClick={() => addNum(0)} fullWidth>0</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button fullWidth>.</Button>
            </Grid.Col>
            <Grid.Col span={3}>
                <Button onClick={solve} fullWidth>
                    <IconEqual />
                </Button>
            </Grid.Col>
        </Grid>
    );
};