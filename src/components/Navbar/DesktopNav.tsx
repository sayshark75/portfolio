import { Flex, Text } from "@chakra-ui/react";
import { NavbarButtonProps } from "../../TYPES";
import NavButton from "./NavButton";
import useScrolling from "../../hooks/useScrolling";

type Props = {
  buttonData: NavbarButtonProps[];
};

const DesktopNav = ({ buttonData }: Props) => {
  const { isScrolling } = useScrolling();

  return (
    <Flex
      transition={"500ms"}
      pos={"fixed"}
      zIndex={100}
      top={"0px"}
      left={"0px"}
      w={"100%"}
      bgColor={"transparent"}
      transform={isScrolling ? "translateY(-150%)" : "none"}
      color={"text"}
      gap={"2"}
      py={3}
    >
      <Flex alignItems={"center"} flex={1} pos={"relative"}>
        <Text
          w={"40px"}
          h={"40px"}
          textAlign={"center"}
          transition={"500ms"}
          color={"text"}
          rounded={"full"}
          cursor={"pointer"}
          border={`3px solid`}
          borderColor={`accent`}
          _hover={{
            transform: "scaleX(-1)",
          }}
          ml={3}
          as={"b"}
          fontSize={"2xl"}
        >
          &sect;
        </Text>
      </Flex>
      <Flex justifyContent={"flex-end"} gap={2} pr={4} flex={4} alignItems={"center"}>
        {buttonData.map((button, index) => {
          return button.link ? (
            <a key={index} href={button.link} onClick={button.refFunction}>
              <NavButton title={button.title} onClick={() => {}} delay={button.delay} />
            </a>
          ) : (
            <NavButton key={index} title={button.title} onClick={button.refFunction} delay={button.delay} />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default DesktopNav;
