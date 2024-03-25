
'use client'
import styled from "styled-components";

const ContactPage = () => {
  return (
    <MainContainer>
      <ContentWrapper>
        <ContactInfo>
          <ContactCard>
            <Title>Get in Touch</Title>
            <Subtitle>Visit Us</Subtitle>
            <Text>
              NSS College of Engineering, Agathethara Palakkad Kerala
            </Text>
            <ContactGroup>
              <ContactTitle>Chat to Us</ContactTitle>
              <Text>Our friendly group is here to help!</Text>
              <ContactDetail>infodarsana@gmail.com</ContactDetail>
            </ContactGroup>
            <ContactGroup>
              <ContactTitle>Call Us</ContactTitle>
              <Text>Monday - Friday</Text>
              <ContactDetail>+91 9999999999</ContactDetail>
            </ContactGroup>
            <ContactTitle>Social Media</ContactTitle>
            <SocialMediaLinks>
              {/* Ensure to replace with actual images and alt text relevant to the image context */}
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/510acb00c1ec967d9c448759128a89a0c5aff850988025996c507040f710d8ab?apiKey=9170b13b4ade437289408c6c891662ab&" alt="Social Media Link" />
              {/* Repeat for other social media links as necessary */}
            </SocialMediaLinks>
          </ContactCard>
          <FormSection>
            <Form>
              <FormFieldSet>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" type="text" placeholder="John" />
                <Label htmlFor="lastName" className="visually-hidden">Last Name</Label>
                <Input id="lastName" type="text" placeholder="Doe" aria-label="Last Name" />
              </FormFieldSet>

              <Label htmlFor="email" className="visually-hidden">Email</Label>
              <Input id="email" type="email" placeholder="example@mail.com" aria-label="Email" />

              <Label htmlFor="phoneNumber" className="visually-hidden">Phone Number</Label>
              <Input id="phoneNumber" type="tel" placeholder="+1 234 567 8910" aria-label="Phone Number" />

              <Label htmlFor="subject" className="visually-hidden">Subject</Label>
              <Input id="subject" type="text" placeholder="Subject" aria-label="Subject" />

              <Label htmlFor="message" className="visually-hidden">Message</Label>
              <Textarea id="message" placeholder="Your message" aria-label="Message" />

              <CheckboxWrapper>
                <Input type="checkbox" id="privacyPolicy" />
                <Label htmlFor="privacyPolicy">I understand and agree to the Privacy Policy</Label>
              </CheckboxWrapper>

              <SubmitButton type="submit">Send Message</SubmitButton>
            </Form>
          </FormSection>
        </ContactInfo>
      </ContentWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto; /* Center the content horizontally */
  padding: 50px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the contact card and form vertically */
  max-width: 1000px; /* Limit the width of the content area */

  @media (max-width: 991px) {
    flex-direction: column; /* Stack the contact card and form on top of each other */
  }
`;

const ContactInfo = styled.section`
  display: flex;
  flex-wrap: wrap; /* Allow the contact card and form to wrap on smaller screens */
  gap: 20px;
`;

const ContactCard = styled.article`
  flex: 1;
  background: linear-gradient(180deg, #6ab5df 2.15%, #e4f1f9 99.98%);
  border-radius: 24px;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #fff;
  font-weight: 600;
`;

const Subtitle = styled.h3`
  color: #fff;
  font-weight: 600;
  margin-top: 40px;
`;

const Text = styled.p`
  color: #fff;
`;

const ContactGroup = styled.div`
  margin-top: 30px;
`;

const ContactTitle = styled.h4`
  color: #fff;
  font-weight: 600;
`;

const ContactDetail = styled.span`
  display: block;
  margin-top: 10px;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const FormSection = styled.section`
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormFieldSet = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  margin-bottom: 16px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 8px;
`;

const Textarea = styled.textarea`
  height: 100px;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 16px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const SubmitButton = styled.button`
  cursor: pointer;
  background-color: #4889dd;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px 30px;
  font-weight: bold;
  margin-top: 20px;
`;

export default ContactPage;