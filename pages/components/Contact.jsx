import React from 'react'
import { ContactContainer, ContactInnerContainer, ContactItem, ContactTitle, ContactType, ContactTypeContainer } from '../../styles/Contact.style'

function Contact() {
  return (
    <ContactContainer>
      <ContactInnerContainer>
        <ContactTitle>Contact</ContactTitle>
        <ContactTypeContainer>
          <ContactType>Phone-</ContactType>
        <ContactItem>(317) 362-9626</ContactItem>
        </ContactTypeContainer>
        <ContactTypeContainer>
          <ContactType>Email-</ContactType>
        <ContactItem>demingmorrison@gmail.com</ContactItem>
        </ContactTypeContainer>
      </ContactInnerContainer>
    </ContactContainer>
  )
}

export default Contact
