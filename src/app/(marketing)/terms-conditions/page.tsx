import { Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";
// Font optimization


// to 
// define this font in one place and used this in every place bcz on every render it will load the font and it will decrease performance
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // Improve font loading performance
  variable: "--font-bricolage", // For CSS variable usage
});

export default function TermsAndConditions() {
    return (
        <section className={`pt-28 lg:pt-48 ${bricolage.className}`}>
            <div className="container max-w-5xl mx-auto px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h1 className="mt-3 text-3xl md:text-4xl font-extrabold">Terms and Conditions</h1>
                    <p className="text-muted-foreground mt-4 text-lg max-w-3xl mx-auto">
                        Please read these terms and conditions carefully before using our services.
                    </p>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                        <p>
                            Welcome to Why2Me ("Company", "we", "our", "us"). These Terms of Service ("Terms", "Terms of Service") govern your use of our website and services (collectively, the "Services") operated by Why2Me.
                        </p>
                        <p>
                            By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of the terms, you do not have permission to access the Services.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">2. Communications</h2>
                        <p>
                            By creating an account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">3. Purchases</h2>
                        <p>
                            If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
                        </p>
                        <p>
                            You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">4. Content</h2>
                        <p>
                            Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
                        </p>
                        <p>
                            By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
                        <p>
                            The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Why2Me and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Why2Me.
                        </p>
                    </section>
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">6. Termination</h2>
                        <p>
                            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                        </p>
                        <p>
                            If you wish to terminate your account, you may simply discontinue using the Service. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">7. Limitation Of Liability</h2>
                        <p>
                            In no event shall Why2Me, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                        </p>
                        <p>
                            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">9. Changes To This Agreement</h2>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                        </p>
                        <p>
                            By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>
                                Email: <Link href="mailto:contact@why2me.com" className="text-primary hover:underline">contact@why2me.com</Link>
                            </li>
                            <li>Website: <Link href="https://www.why2me.com/" className="text-primary hover:underline">www.why2me.com</Link></li>
                            <li>
                                Phone: <Link href="tel:+91-555-123-4567" className="text-primary hover:underline">+91 (555) 123-4567</Link>
                            </li>
                            <li>Address: 123 Agency Street, Creative City, CA 90210</li>
                        </ul>
                    </section>

                    <div className="border-t pt-6 mt-12">
                        <p className="text-sm text-muted-foreground">
                            Last updated: September 2, 2025
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
