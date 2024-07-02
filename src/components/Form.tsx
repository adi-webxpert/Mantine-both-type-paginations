import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import MenuOption from './MenuOption';

function Form() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        size="25%"
        
      >
       <MenuOption/>
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}

export default Form