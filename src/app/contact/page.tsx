import { Layout } from '@/components/common';
import { ContactContainer } from '@/containers';
import CTA from '@/components/CTA';

function Contact() {

    return(
        <Layout main transparent className="gap-10 mb-40 pt-40">
            <CTA />
            <div className="flex flex-col w-full items-center justify-center gap-10">
                <ContactContainer />
            </div>
        </Layout>
    );
};

export default Contact;