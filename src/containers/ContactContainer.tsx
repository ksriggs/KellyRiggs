"use client"

import type { ContactFormValues } from '@/components/Forms/ContactForm';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast'

import { ToastError, ToastSuccess } from '@/components/common';
import ContactForm from '@/components/Forms/ContactForm';


function ContactContainer() {

    const mutation = useMutation({
        mutationFn: async (values: ContactFormValues) => {
            const payload = {
                "form-name": "contact",
                ...values
            };

            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-url-encoded" },
                body: new URLSearchParams(payload as Record<string, string>).toString()
            });

            if(!response.ok) {
                throw new Error("Form Submission Failed");
            }

            return response;
        }
    });

    const onSubmit = async (values: ContactFormValues) => {
        try {
            await mutation.mutateAsync(values);

            toast((t) => (
                <ToastSuccess toast={t} message={"Message submitted successfully!"} />
            ));
        }
        catch(error) {
            console.error(error);
            toast((t) => (
                <ToastError toast={t} message={"Unable to submit message"} />
            ));
        }
    };

    return(
        <ContactForm onSubmit={onSubmit} />
    );
};

export default ContactContainer;