import { Mail, Phone, Link, Linkedin, Twitter, Github, Instagram, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "react-toastify";

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simular envío de email (aquí puedes integrar EmailJS más tarde)
        try {
            // Simulación de delay de envío
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            toast.success('Message sent successfully, I will get back to you soon ❤️', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            
            // Limpiar formulario
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            toast.error('Error al enviar el mensaje. Por favor intenta de nuevo.', {
                position: "top-right",
                autoClose: 5000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
       
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get in <span className="text-primary">Touch</span>
            </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to new opportunities. If you have any questions or want to work together, please don't hesitate to contact me.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6">

            </h3>
            <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Mail className="w-6 h-6 text-primary" />
                        {""}
                    </div>
                    <div>
                        <h4 className="font-medium">
                            Email
                        </h4>
                        <a href="mailto:paradoxluca44@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                        paradoxluca44@gmail.com
                        </a>
                    </div>

                </div>
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Phone className="w-6 h-6 text-primary" />
                        {""}
                    </div>
                    <div>
                        <h4 className="font-medium">
                            Phone
                        </h4>
                        <a href="tel:+61498567890" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                        +61 498 567 890
                        </a>
                    </div>

                </div>
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Linkedin className="w-6 h-6 text-primary" />
                        {""}
                    </div>
                    <div>
                        <h4 className="font-medium">
                            LinkedIn
                        </h4>
                        <a href="https://www.linkedin.com/in/luca-dev/" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                        https://www.linkedin.com/in/luca-dev/
                        </a>
                    </div>

                </div>

            </div>
            <div className="pt-8">
                <h4 className="font-medium mb-4">
                    Social Media
                </h4>
                <div className="flex space-x-4 justify-center">
                    <a href="https://www.instagram.com/lucaperalta__/" target="_blank">
                        <Instagram />
                    </a>
                    <a href="https://github.com/LucaPeralta" target="_blank">
                        <Github />
                    </a>
                    <a href="https://x.com/lucap__" target="_blank">
                        <Twitter />
                    </a>

                </div>
            </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> 
                Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                        className="w-full px-4 py-3 border rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                        placeholder="Enter your name"
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                        className="w-full px-4 py-3 border rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                        placeholder="Enter your email"
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                    </label>
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message}
                        onChange={handleInputChange}
                        required 
                        className="w-full px-4 py-3 border rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none h-48" 
                        placeholder="Enter your message"
                        disabled={isSubmitting}
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={cn(
                        "cosmic-button w-full flex items-center justify-center gap-2",
                        isSubmitting && "opacity-50 cursor-not-allowed"
                    )}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={16}/>
                </button>           
                         </form>
            </div>

        </div>
        </div>
        </section>
    );
};