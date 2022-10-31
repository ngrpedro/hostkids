import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure
} from "@chakra-ui/react";
import { FadersHorizontal } from "phosphor-react";
import InstituteFilter from "./InstituteFilter";

const InstituteFilterButtonIcon = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <div className="p-2" onClick={onOpen}>
        <FadersHorizontal size={28} />
      </div>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Selefione os filtros</DrawerHeader>

          <DrawerBody>
            <InstituteFilter />
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              fontSize={"14px"}
              mr={3}
              onClick={onClose}
            >
              Sair
            </Button>
            <Button fontSize={"14px"} onClick={onClose}>
              Pesquisar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default InstituteFilterButtonIcon;
