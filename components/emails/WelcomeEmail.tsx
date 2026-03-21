import {
    Button,
    Heading,
    Img,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";

export const WelcomeEmail = ({ email }: { email: string }) => (
    <Tailwind>
        <Section className="flex w-full justify-center bg-lime-50 px-4 py-10">
            <Section className="w-full max-w-xl rounded-lg bg-lime-200/60">
                <div className="mb-6 flex justify-center">
                    <Img
                        alt="Satya Vivechan Logo"
                        className="mt-8 h-14"
                        src="https://satyavivechan.qzz.io/images/logo.svg"
                    />
                </div>

                <div className="border-t border-lime-900/20 px-12 pt-12">
                    <Heading className="font-hindi mb-4 text-center text-3xl font-black text-lime-950 uppercase">
                        We welcome you to the family
                    </Heading>

                    {/* Main Welcome Text */}
                    <Text className="mb-6 text-center text-base leading-7 text-lime-900/95">
                        You’ve successfully signed up for our newsletter.
                        <br />
                        <br />
                        At <strong>Satya Vivechan</strong>, we’re more than just
                        a platform—we're a growing community of truth-seekers,
                        thinkers, and lovers of ancient wisdom.
                        <br />
                        <br />
                        We’re honored to have you with us on this journey of
                        knowledge, self-discovery, and dharma.
                    </Text>
                </div>
                <div className="text-center">
                    <Button
                        className="bg-lime-900 px-6 py-3 font-medium text-lime-100"
                        href="https://satyavivechan.qzz.io"
                    >
                        Explore Latest Articles
                    </Button>
                </div>

                <Text className="mt-8 border-t border-lime-900/20 py-8 text-center text-xs text-lime-900/70">
                    You're receiving this email because you subscribed to our
                    blog updates.
                    <br />
                    If you wish to unsubscribe,{" "}
                    <a
                        href="https://namaste.satyavivechan.qzz.io/unsubscribe"
                        className="text-lime-800 underline"
                    >
                        click here
                    </a>
                    .
                </Text>
            </Section>
        </Section>
    </Tailwind>
);
