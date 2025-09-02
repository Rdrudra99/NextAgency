import { Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";

// Font optimization
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // Improve font loading performance
  variable: "--font-bricolage", // For CSS variable usage
});

export default function PrivacyPolicy() {
    return (
        <section className={`pt-28 lg:pt-48 ${bricolage.className}`}>
            <div className="container max-w-5xl mx-auto px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h1 className="mt-3 text-3xl md:text-4xl font-extrabold">Privacy Policy</h1>
                    <p className="text-muted-foreground mt-4 text-lg max-w-3xl mx-auto">
                        Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
                    </p>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                        <p>
                            We may collect several different types of information for various purposes to provide and improve our services to you:
                        </p>
                        <h3 className="text-xl font-semibold mt-4 mb-2">Personal Data</h3>
                        <p>
                            While using our services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Email address</li>
                            <li>First name and last name</li>
                            <li>Phone number</li>
                            <li>Address, State, Province, ZIP/Postal code, City</li>
                            <li>Cookies and Usage Data</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-4 mb-2">Usage Data</h3>
                        <p>
                            We may also collect information on how our services are accessed and used. This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our services that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">2. Use of Data</h2>
                        <p>
                            Why2Me uses the collected data for various purposes:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>To provide and maintain our services</li>
                            <li>To notify you about changes to our services</li>
                            <li>To allow you to participate in interactive features of our services when you choose to do so</li>
                            <li>To provide customer support</li>
                            <li>To gather analysis or valuable information so that we can improve our services</li>
                            <li>To monitor the usage of our services</li>
                            <li>To detect, prevent and address technical issues</li>
                            <li>To provide you with news, special offers and general information about other goods, services and events which we offer</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">3. Data Storage and Transfer</h2>
                        <p>
                            Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
                        </p>
                        <p>
                            If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to the United States and process it there.
                        </p>
                        <p>
                            Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">4. Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies and similar tracking technologies to track activity on our services and hold certain information.
                        </p>
                        <p>
                            Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our services.
                        </p>
                        <p>
                            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">5. Security of Data</h2>
                        <p>
                            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">6. Your Data Protection Rights</h2>
                        <p>
                            We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
                        </p>
                        <p>
                            If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.
                        </p>
                        <p>
                            In certain circumstances, you have the following data protection rights:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>The right to access, update or delete the information we have on you</li>
                            <li>The right of rectification - the right to have your information corrected if that information is inaccurate or incomplete</li>
                            <li>The right to object to our processing of your Personal Data</li>
                            <li>The right of restriction - the right to request that we restrict the processing of your personal information</li>
                            <li>The right to data portability - the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format</li>
                            <li>The right to withdraw consent - the right to withdraw your consent at any time where we relied on your consent to process your personal information</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
                        <p>
                            Our services are not intended for use by children under the age of 13 ("Children").
                        </p>
                        <p>
                            We do not knowingly collect personally identifiable information from Children under 13. If you become aware that a Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">8. Changes to This Privacy Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>
                        <p>
                            We will let you know via email and/or a prominent notice on our services, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
                        </p>
                        <p>
                            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us:
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
                            Last updated: September 3, 2025
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}