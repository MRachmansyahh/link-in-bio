"use client";

import { Box, Grid, VStack, Image, Text, List, HStack } from "@chakra-ui/react";
import {
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
const HomePage = () => {
  const links = [
    {
      url: "https://wa.me/6285156025853",
      icon: IoLogoWhatsapp,
      text: "Whatsapp",
      iconColor: "#25D366",
    },
    {
      url: "https://www.instagram.com/mala.suvenir/",
      icon: IoLogoInstagram,
      text: "Instagram",
      iconColor: "#E1306C",
    },
    {
      url: "https://mala-suvenir.vercel.app/",
      icon: MdOutlineWeb,
      text: "Website",
      iconColor: "gray.600",
    },
    {
      url: "mailto:mala.suvenir@gmail.com",
      icon: IoMailOutline,
      text: "Mail",
      iconColor: "#DB4437",
    },
    {
      url: "https://www.google.co.id/maps/place/Kec.+Setu,+Kota+Tangerang+Selatan,+Banten/@-6.3422899,106.641755,13z/data=!3m1!4b1!4m6!3m5!1s0x2e69e507262cc14d:0x1628b892a62c4b3b!8m2!3d-6.3447976!4d106.6661295!16s%2Fg%2F1238516n?entry=ttu",
      icon: IoLocationOutline,
      text: "Location",
      iconColor: "#4285F4",
    },
  ];

  const parentContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const childElement = {
    hidden: { opacity: 0, x: "-50px" },
    show: { opacity: 1, x: "0px" },
  };
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} bgGradient="linear(to-b, #344e41, #a3b18a)">
        <VStack mt={"3em"}>
          <Image
            w="10em"
            src="/logo.png"
            borderRadius="50%"
            boxShadow="0px 0px 30px rgba(0, 0, 0, 0.5)"
            as={motion.img}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={"linear 0.1s"}
            whileTap={{ scale: 0.9 }}
          />
          <Text
            fontSize={30}
            fontWeight="bold"
            color={"white"}
            as={motion.h1}
            initial={{ x: "-50px", opacity: 0 }}
            animate={{ x: "0px", opacity: 1 }}
            transition={"linear 0.1s"}
          >
            Crafting Timeless Memories
          </Text>
          <List
            as={motion.ul}
            variants={parentContainer}
            initial="hidden"
            animate="show"
          >
            {links.map((link, index) => (
              <Link
                href={link.url}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <HStack
                  w="15em"
                  h="3em"
                  borderRadius="lg"
                  bgGradient="linear(to-l, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.8))"
                  color="white"
                  justifyContent={"space-between"}
                  p={"1em"}
                  my={"1em"}
                  as={motion.div}
                  variants={childElement}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Text
                    as="h3"
                    fontSize={20}
                    fontWeight="bold"
                    color={"gray.900"}
                  >
                    {link.text}
                  </Text>
                  <Text as={link.icon} fontSize={30} color={link.iconColor} />
                </HStack>
              </Link>
            ))}
          </List>
          <Text
            my={"3em"}
            fontSize={"sm"}
            textAlign={"center"}
            as={motion.h1}
            initial={{ x: "-50px", opacity: 0 }}
            animate={{ x: "0px", opacity: 1 }}
            transition={"linear 0.1s"}
          >
            © 2023 MALA. All rights reserved
          </Text>
        </VStack>
      </Grid>
    </Box>
  );
};

export default HomePage;
