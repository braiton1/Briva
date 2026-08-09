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
    }

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

        await new Promise((resolve) => setTimeout(resolve, 1000))

        setIsSubmitting(false)
        setIsSubmitted(true)
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
                    <p className="contact__success" role="status">
                        Gracias. Recibimos los datos de tu proyecto.
                    </p>
                )}
            </form>
        </section>
    )
}

export default Contact