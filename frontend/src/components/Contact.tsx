import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

const initialFormData = {
    name: '',
    email: '',
    message: '',
}

type FormErrors = {
    name?: string
    email?: string
    message?: string
}

function Contact() {
    const [formData, setFormData] = useState(initialFormData)
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState('')

    function handleChange(
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        const { name, value } = event.target

        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }))

        setErrors((currentErrors) => ({
            ...currentErrors,
            [name]: undefined,
        }))

        setIsSubmitted(false)
        setSubmitError('')
    }
    const whatsappMessage = encodeURIComponent(
        `Hola, soy ${formData.name}. Acabo de enviar una solicitud desde la web de Briva y me gustaría continuar por WhatsApp.`,
    )

    const whatsappUrl = `https://wa.me/5491141972952?text=${whatsappMessage}`

    function validateForm() {
        const newErrors: FormErrors = {}

        if (formData.name.trim().length < 3) {
            newErrors.name = 'Ingresá un nombre de al menos 3 caracteres.'
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Ingresá un correo electrónico válido.'
        }

        if (formData.message.trim().length < 20) {
            newErrors.message = 'Contanos un poco más sobre tu proyecto.'
        }

        return newErrors
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const validationErrors = validateForm()
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length > 0) {
            return
        }

        setIsSubmitting(true)
        setSubmitError('')

        try {
            const response = await fetch('https://formspree.io/f/xoeajbwe', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error('No se pudo enviar el formulario')
            }

            setIsSubmitted(true)
        } catch {
            setSubmitError(
                'No pudimos enviar tu solicitud. Intentá nuevamente en unos minutos.',
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="contact" id="contacto">
            <div className="contact__content">
                <span>Hablemos de tu proyecto</span>

                <h2>Construyamos una presencia digital que represente tu negocio.</h2>

                <p>
                    Contanos qué necesitás. Vamos a escucharte, entender tu proyecto y
                    proponerte una solución clara.
                </p>
            </div>

            <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <label>
                    Nombre
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                    />

                    {errors.name && (
                        <span className="contact__error" id="name-error">
                            {errors.name}
                        </span>
                    )}
                </label>

                <label>
                    Correo electrónico
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nombre@correo.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                    />

                    {errors.email && (
                        <span className="contact__error" id="email-error">
                            {errors.email}
                        </span>
                    )}
                </label>

                <label>
                    Contanos sobre tu proyecto
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="¿Qué te gustaría construir?"
                        maxLength={500}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    <span className="contact__counter">
                        {formData.message.length}/500 caracteres
                    </span>

                    {errors.message && (
                        <span className="contact__error" id="message-error">
                            {errors.message}
                        </span>
                    )}
                </label>

                <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                >
                    {isSubmitting
                        ? 'Enviando...'
                        : isSubmitted
                            ? 'Solicitud recibida'
                            : 'Solicitar presupuesto'}
                </button>

                {isSubmitted && (
                    <div className="contact__success-actions">
                        <p className="contact__success" role="status">
                            Gracias. Recibimos los datos de tu proyecto.
                        </p>

                        <a
                            className="contact__whatsapp"
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Continuar por WhatsApp
                        </a>
                    </div>
                )}
                {submitError && (
                    <p className="contact__submit-error" role="alert">
                        {submitError}
                    </p>
                )}
            </form>
        </section>
    )
}

export default Contact