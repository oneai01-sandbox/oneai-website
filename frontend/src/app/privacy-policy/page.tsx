import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Container } from "@/components/common/Container";
import { createPageMetadata } from "@/config/site";

import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata("Privacy Policy");

export default function PrivacyPolicyPage() {
  return (
    <section className={styles.page}>
      <Container className={styles.container}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Privacy Policy</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lead}>
            ONE AI respects your privacy and is committed to protecting the
            personal information you provide through our website.
          </p>

          <div className={styles.sections}>
            <PolicySection title="1. Information We Collect">
              <p>
                We may collect personal information when you contact us, submit
                an inquiry, or request a demo through our website.
              </p>
              <p>
                The information we collect may include your name, company or
                organization name, email address, phone number, inquiry
                details, and any other information you voluntarily provide.
              </p>
              <p>
                We may also collect limited technical information, such as
                browser type, device information, pages visited, and website
                usage data, to improve the performance and usability of our
                website.
              </p>
            </PolicySection>

            <PolicySection title="2. Purpose of Collection and Use">
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li>To respond to inquiries and requests</li>
                <li>To provide product, service, or demo-related information</li>
                <li>To communicate with potential customers and partners</li>
                <li>To improve our website and services</li>
                <li>To comply with applicable laws and regulations</li>
              </ul>
            </PolicySection>

            <PolicySection title="3. Retention and Use Period">
              <p>
                We retain personal information only for as long as necessary to
                fulfill the purposes described in this Privacy Policy, unless a
                longer retention period is required by applicable law.
              </p>
              <p>
                When personal information is no longer needed, we will delete
                or securely dispose of it in accordance with applicable
                regulations.
              </p>
            </PolicySection>

            <PolicySection title="4. Sharing of Personal Information">
              <p>
                ONE AI does not sell, rent, or trade personal information to
                third parties.
              </p>
              <p>
                We may share personal information only when required by law,
                necessary to respond to your request, or needed to protect the
                rights and safety of ONE AI, our users, or others.
              </p>
            </PolicySection>

            <PolicySection title="5. Data Protection">
              <p>
                We take reasonable technical and organizational measures to
                protect personal information from unauthorized access, loss,
                misuse, alteration, or disclosure.
              </p>
            </PolicySection>

            <PolicySection title="6. Your Rights">
              <p>
                You may request access to, correction of, deletion of, or
                restriction on the processing of your personal information.
              </p>
              <p>
                To exercise these rights, please contact us using the contact
                information below.
              </p>
            </PolicySection>

            <PolicySection title="7. Cookies and Website Analytics">
              <p>
                Our website may use cookies or similar technologies to improve
                user experience, analyze website traffic, and understand how
                visitors use our website.
              </p>
              <p>
                You may disable cookies through your browser settings. However,
                some website features may not function properly if cookies are
                disabled.
              </p>
            </PolicySection>

            <PolicySection title="8. Contact">
              <p>
                If you have any questions about this Privacy Policy or the
                handling of your personal information, please contact us.
              </p>
              <p>
                ONE AI
                <br />
                Email: oneai@one-ai.dev
              </p>
            </PolicySection>

            <PolicySection title="9. Changes to This Privacy Policy">
              <p>
                We may update this Privacy Policy from time to time. Any
                changes will be posted on this page with an updated effective
                date.
              </p>
              <p>Effective Date: 2026-09-14</p>
            </PolicySection>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.body}>{children}</div>
    </section>
  );
}
