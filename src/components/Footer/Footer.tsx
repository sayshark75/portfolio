import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Flex transition={"500ms"} bgColor={"#3a3a3a"} justifyContent={"flex-start"} p={1} alignItems={"center"} w={"100%"}>
        <Text transition={"500ms"} fontWeight={"300"} color={"#fff"} fontFamily={"Poppins"} letterSpacing={"2px"} as={"b"} fontSize={"10px"}>
          © By Sayyed Sharuk - 2023
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
