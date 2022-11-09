import { Box } from "@chakra-ui/react";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Font & Text */
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: normal;
  text-decoration: none solid rgb(255, 255, 255);
  text-align: center;
  text-indent: 0px;
  text-transform: none;
  vertical-align: top;
  white-space: normal;

  /* Color & Background */
  background-attachment: scroll;
  background-color: rgba(0, 0, 0, 0);
  background-image: none;
  background-position: 0% 0%;
  background-repeat: repeat;
  color: rgb(255, 255, 255);

  /* Box */
  height: 115px;
  width: 105px;
  border: 0px none rgb(255, 255, 255);
  border-top: 0px none rgb(255, 255, 255);
  border-right: 0px none rgb(255, 255, 255);
  border-bottom: 0px none rgb(255, 255, 255);
  border-left: 0px none rgb(255, 255, 255);
  margin: 5px;
  padding: 0px;
  max-height: none;
  min-height: 0px;
  max-width: none;
  min-width: 0px;


  /* Miscellaneous */
  cursor: help;
  visibility: visible;

  .topBox {
    /* Font & Text */
    font-size: 23px;
    font-style: normal;
    font-variant: normal;
    font-weight: 700;
    letter-spacing: normal;
    line-height: normal;
    text-decoration: none solid rgb(255, 255, 255);
    text-align: center;
    text-indent: 0px;
    text-transform: none;
    white-space: normal;
    word-spacing: 0px;

    /* Color & Background */
    background-attachment: scroll;
    background-color: rgb(146, 121, 187);
    background-image: none;
    background-position: 0% 0%;
    background-repeat: repeat;
    color: rgb(255, 255, 255);

    /* Box */
    height: 31.2px;
    width: 95px;
    border: 0px none rgb(255, 255, 255);
    border-top: 0px none rgb(255, 255, 255);
    border-right: 0px none rgb(255, 255, 255);
    border-bottom: 0px none rgb(255, 255, 255);
    border-left: 0px none rgb(255, 255, 255);
    margin: 0px;
    padding: 10px 5px;
    max-height: none;
    min-height: 0px;
    max-width: none;
    min-width: 0px;

    /* List */
    list-style-image: none;
    list-style-type: disc;
    list-style-position: outside;

    /* Table */
    border-collapse: separate;
    border-spacing: 1.6px 1.6px;
    caption-side: top;
    empty-cells: show;
    table-layout: auto;

    /* Miscellaneous */
    cursor: help;

    /* Effects */
    transform: none;
    transition: all 0s ease 0s;
    outline-offset: 0px;
    box-sizing: content-box;
    resize: none;
    text-shadow: none;
    text-overflow: clip;
    word-wrap: normal;
    box-shadow: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .bottomBox {
    /* Font & Text */
    font-family: 'Open Sans', sans-serif;
    font-size: 10px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    letter-spacing: normal;
    line-height: normal;
    text-decoration: none solid rgb(255, 255, 255);
    text-align: center;
    text-indent: 0px;
    text-transform: none;
    white-space: normal;
    word-spacing: 0px;

    /* Color & Background */
    background-attachment: scroll;
    background-color: rgb(119, 99, 154);
    background-image: none;
    background-position: 0% 0%;
    background-repeat: repeat;
    color: rgb(255, 255, 255);

    /* Box */
    height: 27.2px;
    width: 79px;
    border: 0px none rgb(255, 255, 255);
    border-top: 0px none rgb(255, 255, 255);
    border-right: 0px none rgb(255, 255, 255);
    border-bottom: 0px none rgb(255, 255, 255);
    border-left: 0px none rgb(255, 255, 255);
    padding: 3px 13px;
    max-height: none;
    min-height: 0px;
    max-width: none;
    min-width: 0px;
    margin-bottom: 7px;


    /* Table */
    border-collapse: separate;
    border-spacing: 1.6px 1.6px;
    caption-side: top;
    empty-cells: show;
    table-layout: auto;

    /* Miscellaneous */
    overflow: visible;
    cursor: help;
    visibility: visible;

    /* Effects */
    transform: none;
    transition: all 0s ease 0s;
    box-sizing: content-box;
    resize: none;
    text-shadow: none;
    text-overflow: clip;
    word-wrap: normal;
    box-shadow: none;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`