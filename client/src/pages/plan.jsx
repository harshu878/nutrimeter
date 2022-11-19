import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Center,
    Flex,
    Image,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AfterLoginPageNavbar from "../components/AfterLoginPageNavbar";
import Footer from "../components/Footer";
  
  
function Plan() {
      const liLinks = [
          {
            name: "Blog",
          },
          {
            name: "Forums",
          },
          {
            name: "Privacy",
          },
          {
            name: "Terms",
          },
          {
            name: "Affiliates",
          },
          {
            name: "Jobs",
          },
        ];
  
    return (
      <Box overflowX={"hidden"}>
        <AfterLoginPageNavbar currentLink='plans'/>
        <Box m={5} ml={10}>
          <Text
            fontSize={25}
            textAlign={"left"}
            fontWeight={600}
            color={"gray.600"}
          >
            Plans
          </Text>
          <Text textAlign={"left"} color={"gray.400"} fontWeight={600}>
            Check out our range of affordable plans for individuals or for
            healthcare professionals.
          </Text>
        </Box>
  
        <SimpleGrid columns={[1, 2, 3, 4]} ml={10} width={"100%"}>
          <Box
            border={"1px"}
            color={"gray.200"}
            h={400}
            width={"250px"}
            boxShadow={"xl"}
            mt={10}
          >
            <Center pt={5} pb={5}>
              <Image
                src={
                  "https://cdn1.cronometer.com/2021/landing/crono-icon-main-nav.svg"
                }
                width={"50px"}
              />
            </Center>
            <Text pb={5} textAlign={"center"} color={"gray.600"} fontSize={"23px"} fontWeight={700}>
              BASIC
            </Text>
            <Text
              pb={5}
              pl={5}
              pr={5}
              textAlign={"center"}
              color={"gray.600"}
              fontSize={"16px"}
              fontWeight={400}
            >
              The basic tool you need to track your nutrition for free!
            </Text>
            <Text color={"gray.600"} textAlign={"center"} fontSize={"23px"} fontWeight={700}>
              $0
            </Text>
            <Text
              h={"82px"}
              color={"gray.600"}
              fontSize={"13px"}
              fontWeight={500}
              textAlign={"center"}
            >
              USD/Month
            </Text>
            <Center>
            <Button
              color={"white"}
              border={"1px"}
              size={"sm"}
              width={"90%"}
              backgroundColor={"rgb(211,230,248)"}
              background={"none"}
              textAlign={"center"}
            >
              <Text color={"black"}>Current Plan</Text>
            </Button>
            </Center>
          </Box>
  
          {/* 2nd */}
          <Box
            border={"1px"}
            mt={10}
            color={"gray.200"}
            h={400}
            width={"250px"}
            boxShadow={"xl"}
          >
            <Center pt={5} pb={5}>
              <Image
                src={"https://cdn1.cronometer.com/2021/landing/gold-icon_1.svg"}
                width={"50px"}
              />
            </Center>
            <Text pb={5} textAlign={"center"} color={"gray.600"} fontSize={"23px"} fontWeight={700}>
              GOLD
            </Text>
            <Text
              pb={5}
              pl={5}
              pr={5}
              textAlign={"center"}
              color={"gray.600"}
              fontSize={"16px"}
              fontWeight={400}
            >
              For those that want to get serious about their health.
            </Text>
            <Text color={"gray.600"} textAlign={"center"} fontSize={"23px"} fontWeight={700}>
              $49.99
            </Text>
            <Text
              h={"82px"}
              color={"gray.600"}
              fontSize={"13px"}
              fontWeight={500}
              textAlign={"center"}
            >
              USD/Year
            </Text>
            <Center>
            <Button
              color={"white"}
              border={"1px"}
              size={"sm"}
              pl={"25%"}
              pr={"25%"}
              backgroundColor={"orange.400"}
              background={"none"}
            >
              Subscribe Now
            </Button>
            </Center>
          </Box>
  
          {/* 3rd */}
          <Box
          mt={10}
            border={"1px"}
            color={"gray.200"}
            h={400}
            width={"250px"}
            boxShadow={"xl"}
          >
            <Center pt={5} pb={5}>
              <Image
                src={
                  "https://cdn1.cronometer.com/2021/landing/pro-icon-main-nav.svg"
                }
                width={"50px"}
              />
            </Center>
            <Text pb={5} textAlign={"center"} color={"gray.600"} fontSize={"23px"} fontWeight={700}>
              PRO
            </Text>
            <Text
              pb={5}
              textAlign={"center"}
              pl={5}
              pr={5}
              color={"gray.600"}
              fontSize={"16px"}
              fontWeight={400}
            >
              For health coaches and trainers.
            </Text>
            <Text color={"gray.600"} textAlign={"center"} fontSize={"23px"} fontWeight={700}>
              $29.95
            </Text>
            <Text pb={2} color={"gray.600"} fontSize={"13px"} textAlign={"center"} fontWeight={500}>
              USD/Month
            </Text>
            <Text
              h={"55px"}
              textAlign={"center"}
              color={"gray.600"}
              fontSize={"11px"}
              fontWeight={400}
            >
              UP TO 10 CLIENTS Add more for $2.25/client per month
            </Text>
            <Center>
            <Button
              color={"white"}
              textAlign={"center"}
              border={"1px"}
              size={"sm"}
              pl={"25%"}
              pr={"25%"}
              backgroundColor={"green.400"}
              background={"none"}
            >
              Subscribe Now
            </Button>
            </Center>
          </Box>
  
          {/* 4rt  */}
          <Box
          mt={10}
            border={"1px"}
            borderRadius={"10px"}
            color={"gray.200"}
            h={400}
            width={"250px"}
            boxShadow={"xl"}
          >
            <Center pt={5} pb={5}>
              <Image
                src={
                  "https://cdn1.cronometer.com/2021/landing/pro-icon-main-nav.svg"
                }
                width={"50px"}
              />
            </Center>
            <Text pb={5} textAlign={"center"} color={"gray.600"} fontSize={"23px"} fontWeight={700}>
              ENTERPRISE
            </Text>
            <Text
              pb={5}
              pl={5}
              pr={5}
              textAlign={"center"}
              color={"gray.600"}
              fontSize={"16px"}
              fontWeight={400}
            >
              For hospitals, schools and research teams.
            </Text>
            <Text color={"gray.600"} textAlign={"center"} fontSize={"23px"} fontWeight={700}>
              Contact Us
            </Text>
            <Text
              h={"82px"}
              color={"gray.600"}
              fontSize={"11px"}
              fontWeight={400}
              textAlign={"center"}
            >
              Custom solutions for enterprise businesses
            </Text>
            <Center>
            <Button
              color={"green.400"}
              border={"1px"}
              textAlign={"center"}
              size={"sm"}
              pl={"25%"}
              pr={"25%"}
              borderColor={"green.400"}
              background={"none"}
            >
              Contact Us
            </Button>
            </Center>
          </Box>
        </SimpleGrid>
        <SimpleGrid
          h={"auto"}
          mt={20}
          columns={[1,2,3,4]}
          ml={10}
          width={"100%"}
        >
          <Box borderRight={"2px"} color={"gray.200"} h={400} width={"260px"}>
            <Text
              mb={5}
              textAlign={"left"}
              color={"gray.700"}
              fontSize={"17px"}
              fontWeight={600}
            >
              The Basic tools you need
            </Text>
            <Text mb={3} width={"260px"} textAlign={"left"}>
              <li style={{ fontSize: "14px",textAlign:"center", color: "gray" }}>
                Log foods, exercise & biometrics
              </li>
            </Text>
            <Text mb={3} width={"260px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Track all your macros & up to 82 micronutrients
              </li>
            </Text>
            <Text mb={3} width={"260px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Customizable macro & micronutrient targets
              </li>
            </Text>
            <Text mb={3} width={"260px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Customizable weight goal settings
              </li>
            </Text>
            <Text mb={3} width={"260px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Sync with devices like Apple Watch, FitBit and more
              </li>
            </Text>
            <Text mb={3} width={"260px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Limited health trends & reports
              </li>
            </Text>
            <Text mb={3} width={"260px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Export your data
              </li>
            </Text>
            <Text mb={3} width={"260px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>Barcode scanner</li>
            </Text>
            <Text mb={3} width={"260px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Mobile and web versions
              </li>
            </Text>
          </Box>
  
          {/* 2nd  */}
          <Box
            borderRight={"2px"}
            pr={10}
            color={"gray.200"}
            h={400}
            width={"260px"}
          >
            <Text
              mb={5}
              textAlign={"left"}
              color={"gray.700"}
              fontSize={"17px"}
              fontWeight={600}
            >
              All the Basic tools plus:
            </Text>
            <Text mb={3} width={"245px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                No advertisements
              </li>
            </Text>
            <Text mb={3} width={"245px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Recipe Importer Easily import & create custom recipes from your
                favourite websites.
              </li>
            </Text>
            <Text mb={3} width={"245px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Diary Groups & Timestamps Organize your diary into separate groups
                or meals and add timestamps to diary entries
              </li>
            </Text>
            <Text mb={3} width={"245px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Target Scheduler Set different Macro Targets for each day of the
                week.
              </li>
            </Text>
            <Text mb={3} width={"245px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Fasting Timer Track your fasts & nutrition in one app!
              </li>
            </Text>
            
          </Box>
  
          {/* 3rd  */}
          <Box borderRight={"2px"} color={"gray.200"} h={400} width={"260px"}>
            <Text
              mb={5}
              textAlign={"left"}
              color={"gray.700"}
              fontSize={"17px"}
              fontWeight={600}
            >
              Gold features for you & your clients, plus:
            </Text>
            <Text mb={3} width={"245px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                View your clients' diary at any time to monitor compliance
              </li>
            </Text>
            <Text mb={3} width={"245px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Manage clients' settings and nutrition data
              </li>
            </Text>
            <Text mb={3} width={"245px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Share custom foods and recipes with your clients
              </li>
            </Text>
            <Text mb={3} width={"245px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Create and share custom biometrics with your clients
              </li>
            </Text>
            <Text mb={3} width={"245px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Chat with clients using secure internal messaging
              </li>
            </Text>
            <Text mb={3} width={"245px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Create Internal Profiles for view of the Professional only
              </li>
            </Text>
            
            
          </Box>
  
          {/* 4rt  */}
          <Box borderRight={"2px"} color={"gray.200"} h={400} width={"260px"}>
            <Text
              mb={5}
              textAlign={"left"}
              color={"gray.700"}
              fontSize={"17px"}
              fontWeight={600}
            >
              All Pro features plus:
            </Text>
            <Text mb={3} width={"245px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                HIPAA compliance If you are operating as a covered entity under
                HIPAA, we can sign a BAA.
              </li>
            </Text>
            <Text mb={3} width={"245px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Risk Assessment & Compliance Review Work with your assessment
                teams to become an approved vendor.
              </li>
            </Text>
            <Text mb={3} width={"245px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                MSA & Yearly Invoicing Provide a Master Service Agreement and
                yearly invoicing through your procurement system.
              </li>
            </Text>
            <Text mb={3} width={"245px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                Staff Training Additonal services such as webinars or on-site
                training.
              </li>
            </Text>
            <Text mb={3} width={"245px"} textAlign={"left"}>
              <li style={{ fontSize: "14px", color: "gray" }}>
                API Access Custom API Access
              </li>
            </Text>
          </Box>
        </SimpleGrid>
  
        {/* FAQ  */}
        <Box mt={10} pl={10} pr={10} mb={10}>
          <Text
            color={"rgb(207,79,45)"}
            mb={5}
            fontWeight={600}
            fontSize={"25px"}
          >
            Frequently Asked Questions
          </Text>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text p={2} fontWeight={600} fontSize={"19px"} color={"gray.600"}>
                      What forms of payment do you accept?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text
                  textAlign={"left"}
                  fontSize={"17px"}
                  fontWeight={400}
                  color={"gray.700"}
                >
                  We accept all major credit cards, except for Discover cards.
                </Text>
              </AccordionPanel>
            </AccordionItem>
  
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text p={2} fontWeight={600} fontSize={"19px"} color={"gray.600"}>
                      Will I be charged sales tax?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text
                  textAlign={"left"}
                  fontSize={"17px"}
                  fontWeight={400}
                  color={"gray.700"}
                >
                  If live you live in Canada, you will be charged Canadian sales
                  tax (we are a Canadian company). If you live outside of Canada,
                  you will not be charged tax.
                </Text>
              </AccordionPanel>
            </AccordionItem>
  
            {/* 3rd  */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text p={2} fontWeight={600} fontSize={"19px"} color={"gray.600"}>
                      How secure is Cronometer?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text
                  textAlign={"left"}
                  fontSize={"17px"}
                  fontWeight={400}
                  color={"gray.700"}
                >
                  We take data security seriously at Cronometer. Not only is your
                  data protected, we will never sell your data to 3rd parties.
                </Text>
              </AccordionPanel>
            </AccordionItem>
  
            {/* 4rt  */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text p={2} fontWeight={600} fontSize={"19px"} color={"gray.600"}>
                      How do I cancel or change my subscription?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text
                  textAlign={"left"}
                  fontSize={"17px"}
                  fontWeight={400}
                  color={"gray.700"}
                >
                  If you purchased gold on our Web version: 
                  <br />
                  <br />
                  1) Log into the web
                  version  
                  <br />
                  <br />
                  2) The Account Tab is the
                  section where you update any sign-up information and manage your
                  subscriptions and personal data. 
                  <br />
                  <br />
                  3) Cancel your Gold
                  subscription at any time to prevent your subscription from
                  renewing at the end of your current term. Select Do Not
                  Auto-Renew from the drop-down menu.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        {/* Links  */}
        <Flex gap={5} m={{base:"20px",md:"auto",lg:"auto"}} width={{base:"10%",md:"30%",lg:"40%"}}>
          {liLinks.map((el, i) => (
            <Text
              mb={5}
              textAlign={"center"}
              fontWeight={500}
              fontSize={"14px"}
              color={"gray.600"}
            >
              <FiberManualRecordIcon
                style={{
                  marginRight: "10px",
                  height: "10px",
                  width: "10px",
                  color: "orange",
                }}
              />{" "}
              {el.name}
            </Text>
          ))}
        </Flex>
        <Footer/>
      </Box>
    );
  }
  
  export default Plan;
  