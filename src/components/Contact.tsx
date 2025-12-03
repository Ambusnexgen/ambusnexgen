import React, { useState } from 'react'
import { servicesData } from '../utils/data'
import { Send } from 'lucide-react'
import { PhoneInput } from 'react-international-phone'
import emailjs from '@emailjs/browser'
import 'react-international-phone/style.css'

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        service: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if(!formData.name){
            setError('Name is required')
            return
        }
        if(!formData.email){
            setError('Email is required')
            return
        }
        if(!formData.phone){
            setError('Phone is required')
            return
        }
        if(!formData.service){
            setError('Service is required')
            return
        }
        if(!formData.message){
            setError('Requirement is required')
            return
        }
        setIsSubmitting(true)
        try{
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

            const now = new Date()
            const timeString = now.toLocaleString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
            
            const templateParams = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                company: formData.companyName || '',
                service: formData.service,
                message: formData.message,
                time: timeString,
            }
            await emailjs.send(serviceId, templateId, templateParams, publicKey)
            setSuccess('Message sent successfully! We\'ll get back to you soon.')
            setFormData({
                name: '',
                email: '',
                phone: '',
                companyName: '',
                service: '',
                message: ''
            })

            setTimeout(() => setSuccess(''), 7000)
        } 
        catch(err: any){
            console.error('Error submitting form:', err)
            setError('Failed to send message. Please try again.')
        } 
        finally{
            setIsSubmitting(false)
            setError('')
        }
    }

    return (
        <section id='contact-us' className='pb-20 max-w-[1440px] mx-auto px-5 relative z-0'>
            {/* Header */}
            <div className='text-center mb-2'>
                <div className='mb-8'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-3'>Contact Us</h2>
                    <div className='w-24 h-1 bg-black mx-auto skew-1'></div>
                </div>
                <p className='text-gray-600 text-lg'>
                    Have an idea, project, or service requirement?<br />
                    Our team is here to guide and support you.
                </p>
            </div>

            {/* Contact Form */}
            <div className='bg-white rounded-lg shadow-md p-6 md:p-8 max-w-[800px] mx-auto'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    {/* Field 1: Name */}
                    <div>
                        <label htmlFor='name' className='text-sm font-semibold text-gray-700'>
                            Full Name <span className='text-red-500'>*</span>
                        </label>
                        <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Enter your full name' className='w-full py-3 px-4 rounded-lg border border-gray-300 transition-all outline-none' />
                        {error === 'Name is required' && <p className='text-red-500 ml-1 mt-1 text-sm'>{error}</p>}
                    </div>

                    {/* Field 2: Email */}
                    <div>
                        <label htmlFor='email' className='text-sm font-semibold text-gray-700'>
                            Email Address <span className='text-red-500'>*</span>
                        </label>
                        <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter your email' className='w-full py-3 px-4 rounded-lg border border-gray-300 transition-all outline-none' />
                        {error === 'Email is required' && <p className='text-red-500 ml-1 mt-1 text-sm'>{error}</p>}
                    </div>

                    {/* Field 3: Phone */}
                    <div>
                        <label htmlFor='phone' className='text-sm font-semibold text-gray-700'>
                            Phone Number <span className='text-red-500'>*</span>
                        </label>
                        <div className="w-full flex rounded-lg border border-gray-300 transition-all">
                            <PhoneInput
                                defaultCountry="in"
                                value={formData.phone}
                                onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
                                placeholder="Enter your phone number"
                                inputStyle={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    border: 'none',
                                    outline: 'none',
                                    borderRadius: '0 8px 8px 0',
                                    fontSize: '16px',
                                    height: '100%'
                                }}
                                countrySelectorStyleProps={{
                                    buttonStyle: {
                                        border: 'none',
                                        borderRight: '1px solid #d1d5db',
                                        borderRadius: '8px 0 0 8px',
                                        padding: '12px 20px',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer',
                                        height: '100%'
                                    },
                                    dropdownStyleProps: {
                                        style: {
                                            borderRadius: '8px',
                                            border: '1px solid #d1d5db',
                                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                        }
                                    }
                                }}
                                hideDropdown={false}
                            />
                        </div>
                        {error === 'Phone is required' && <p className='text-red-500 ml-1 mt-1 text-sm'>{error}</p>}
                    </div>

                    {/* Field 4: Company Name */}
                    <div>
                        <label htmlFor='companyName' className='text-sm font-semibold text-gray-700'>
                            Company Name
                        </label>
                        <input type='text' id='companyName' name='companyName' value={formData.companyName} onChange={handleChange} placeholder='Enter your company name' className='w-full py-3 px-4 rounded-lg border border-gray-300 transition-all outline-none' />
                    </div>

                    {/* Field 5: Select Service */}
                    <div>
                        <label htmlFor='service' className='text-sm font-semibold text-gray-700'>
                            Select Service <span className='text-red-500'>*</span>
                        </label>
                        <select id='service' name='service' value={formData.service} onChange={handleChange} className='w-full py-3 px-4 rounded-lg border border-gray-300 transition-all outline-none bg-white cursor-pointer'>
                            <option value=''>Choose a service...</option>
                            {servicesData.map((service) => (
                                <option key={service.id} value={service.title}>
                                    {service.title}
                                </option>
                            ))}
                        </select>
                        {error === 'Service is required' && <p className='text-red-500 ml-1 mt-1 text-sm'>{error}</p>}
                    </div>

                    {/* Field 6: Message */}
                    <div>
                        <label htmlFor='message' className='text-sm font-semibold text-gray-700'>
                            Describe Your Requirement: <span className='text-red-500'>*</span>
                        </label>
                        <textarea id='message' name='message' value={formData.message} onChange={handleChange} placeholder='Tell us about your project or requirement...' rows={6} className='w-full py-3 px-4 rounded-lg border border-gray-300 transition-all outline-none resize-none' />
                        {error === 'Requirement is required' && <p className='text-red-500 ml-1 mt-1 text-sm'>{error}</p>}
                    </div>

                    {/* Submit Button */}
                    <button type='submit' disabled={isSubmitting} className='w-full px-8 py-3 cursor-pointer bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'>
                        {isSubmitting ? (
                            <>Submitting...</>
                        ) : (
                            <>
                                <Send className='size-5' />
                                Submit Enquiry
                            </>
                        )}
                    </button>
                    {success && <p className='text-green-600 ml-2 mt-[-20px] text-sm'>{success}</p>}
                    {error.includes('Failed to send message') && <p className='text-red-500 ml-2 mt-[-20px] text-sm'>{error}</p>}
                </form>
            </div>
        </section>
    )
}

export default Contact