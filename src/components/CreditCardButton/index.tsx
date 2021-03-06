import React from "react";
import {
  Line,
  Wrapper,
  WrapperRow,
  Title,
  InvoiceText,
  InvoiceAmount,
  AvailableLimit,
  NoAccountValue,
} from "./styles";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { Colors } from "../../tools/colors";

interface ICreditCardButtonProps {
  title: string;
  invoiceAmountText: string;
  invoiceText: string;
  availableLimitText: string;
  isVisible: boolean;
}
export const CreditCardButton = ({
  title,
  invoiceAmountText,
  invoiceText,
  availableLimitText,
  isVisible,
}: ICreditCardButtonProps) => {
  return (
    <>
      <Line />
      <Wrapper activeOpacity={0.4}>
        <Feather name="smartphone" size={20} color={Colors.black} />
        <WrapperRow>
          <Title>{title}</Title>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color={Colors.gray.dark}
          />
        </WrapperRow>
        <InvoiceText>{invoiceText}</InvoiceText>
        {isVisible ? (
          <InvoiceAmount>R$ {invoiceAmountText}</InvoiceAmount>
        ) : (
          <NoAccountValue />
        )}
        <AvailableLimit>{availableLimitText}</AvailableLimit>
      </Wrapper>
    </>
  );
};
