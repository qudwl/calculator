import { ActionIcon, Button, Card, Container, Grid } from '@mantine/core';
import {IconBackspace} from '@tabler/icons-react';

export function HomePage() {
  return (
    <Container size="xs" mt="lg">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section />
          <Grid>
            <Grid.Col span={3}>
              <Button>%</Button>
            </Grid.Col>
            <Grid.Col span={3}>
              <Button>CE</Button>
            </Grid.Col>
            <Grid.Col span={3}>
              <Button>C</Button>
            </Grid.Col>
            <Grid.Col span={3}>
              <ActionIcon variant="filled">
                <IconBackspace />
              </ActionIcon>
            </Grid.Col>
          </Grid>
      </Card>
    </Container>
  );
}
