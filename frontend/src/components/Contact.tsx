import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

const initialFormData = {
    name: '',
    business: '',
    phone: '',
    message: '',
}

type FormErrors = {
    name?: string
    business?: string
    phone?: string
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
        `Hola, soy ${formData.name}. Acabo de enviar una solicitud para mi negocio (${formData.business}) desde la web de Briva y me gustaría continuar por WhatsApp.`,
    )

    const whatsappUrl = `https://wa.me/5491141972952?text=${whatsappMessage}`

    function validateForm() {
        const newErrors: FormErrors = {}

        if (formData.name.trim().length < 3) {
            newErrors.name = 'Ingresá un nombre de al menos 3 caracteres.'
        }

        if (formData.business.trim().length < 2) {
            newErrors.business = 'Contanos qué tipo de negocio tenés.'
        }

        const phoneDigits = formData.phone.replace(/\D/g, '')
        if (phoneDigits.length < 8) {
            newErrors.phone = 'Ingresá un número de WhatsApp válido.'
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

        <h2>Construyamos una página que represente bien tu negocio.</h2>

                <p>
          Contanos qué ofrecés, a quién querés llegar y cuál es tu objetivo.
          Te responderemos dentro de un día hábil con una primera orientación clara.
                </p>
                <a className="contact__direct-whatsapp" href="https://wa.me/5491141972952?text=Hola%20Briva%2C%20quiero%20consultar%20por%20una%20p%C3%A1gina%20para%20mi%20negocio." target="_blank" rel="noreferrer">Hablar directamente por WhatsApp</a>
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
                    Tipo de negocio
                    <input
                        type="text"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="Ejemplo: panadería, gimnasio o cabañas"
                        aria-invalid={Boolean(errors.business)}
                        aria-describedby={errors.business ? 'business-error' : undefined}
                    />

                    {errors.business && (
                        <span className="contact__error" id="business-error">
                            {errors.business}
                        </span>
                    )}
                </label>

                <label>
                    WhatsApp
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Tu número con código de área"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />

                    {errors.phone && (
                        <span className="contact__error" id="phone-error">
                            {errors.phone}
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
