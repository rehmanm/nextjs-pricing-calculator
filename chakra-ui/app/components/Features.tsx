"use client";

import {Box, HStack, Icon, StackProps, Text} from "@chakra-ui/react";
import React, {ElementType} from "react";
import {HassleFreeIcon, MoneyBackGuarantee, SubscriptionIcon} from "../icons/Icon";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

export const Feature = (props: FeatureProps) => {
  const {children, icon, ...rest} = props;
  return (
    <HStack pb="8">
      <Icon as={icon} boxSize="12" />
      <Text fontSize="lg" textAlign="left" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
};

function Features() {
  return (
    <Box pt="60px" maxW="1024" m="auto" pb="8">
      <HStack
        flexDirection={["column", "column", "row"]}
        px="12"
        spacing={["0", "0", "5"]}
        alignItems="start"
      >
        <Feature icon={MoneyBackGuarantee}>30 days money back Guarantee</Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={SubscriptionIcon}>No monthly subscription Pay once and for all</Feature>
      </HStack>
    </Box>
  );
}

export default Features;
