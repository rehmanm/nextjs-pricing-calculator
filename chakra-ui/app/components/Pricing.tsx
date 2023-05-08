"use client";
import {Box, Button, Flex, HStack, Heading, Stack, StackProps, Text} from "@chakra-ui/react";
import React from "react";
import {CheckIcon} from "../icons/Icon";

export const ListItem = (props: StackProps) => {
  const {children, ...rest} = props;
  return (
    <HStack as="li" spacing="5" {...rest} alignItems="start">
      <CheckIcon />
      <Text>{children}</Text>
    </HStack>
  );
};

function Pricing() {
  return (
    <Box mx="6">
      <Box
        maxWidth="994px"
        margin="auto"
        mt="-256px"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg="#F0EAFB" p="60px" textAlign="center">
            <Text fontSize="2xl">Premium PRO</Text>
            <Heading as="h3" fontWeight="extrabold" fontSize="5xl">
              $329
            </Heading>
            <Text fontWeight="medium" fontSize="lg" mt="2">
              billed just once
            </Text>
            <Button colorScheme="purple" size="lg" w="282px" mt="6">
              Get Started
            </Button>
          </Box>
          <Box bg="#fff" p="60px" fontSize="lg" fontWeight="normal">
            <Text textAlign="left">
              Access these features when you get this pricing package for your business.
            </Text>
            <Stack as="ul" spacing="5" pt="6">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Pricing;
