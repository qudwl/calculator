import { DarkModeToggle } from '@/components/DarkModeToggle';
import { SimpleCalculator } from '@/components/SimpleCalculator';
import { useStore } from '@/store';
import { ActionIcon, Button, Card, Container, Grid, Group, Paper, Stack, Text } from '@mantine/core';
import { IconBackspace, IconMoonFilled } from '@tabler/icons-react';

export function HomePage() {
  const { equation } = useStore();
  return (
    <Container size="xs" mt="lg">
      <Stack>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group>
            <DarkModeToggle />
          </Group>
          <Card.Section m="xs">
            <Paper shadow="lg" radius="xl" p="xs" pl="lg" pr="lg" withBorder>
              <Text>{equation}</Text>
            </Paper>
          </Card.Section>

          <SimpleCalculator />
        </Card>
      </Stack>
    </Container>
  );
}
