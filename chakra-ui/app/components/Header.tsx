"use client";
import {Box, Heading, Text} from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Box pb="28" as="section">
      <Box
        bg="purple.600"
        color="gray.50"
        pt="90px"
        pb="198px"
        textAlign={["left", "left", "center"]}
        px="8"
      >
        <Heading fontWeight="extrabold" fontSize={["3xl", "3xl", "5xl"]}>
          Simple pricing for your business
        </Heading>
        <Text pt="5" fontWeight="medium" fontSize={["lg", "lg", "2xl"]}>
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
}

export default Header;
