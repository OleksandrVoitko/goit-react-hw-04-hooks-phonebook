import React from "react";
import { ContactItem, ContactDeleteButton } from "./ContactListItem.styled";

const ContactListItem = ({ id, name, number, onClickDeleteContact }) => {
  return (
    <ContactItem key={id}>
      {name}: {number}
      <ContactDeleteButton type="submit" onClick={onClickDeleteContact}>
        Delete
      </ContactDeleteButton>
    </ContactItem>
  );
};

export default ContactListItem;
