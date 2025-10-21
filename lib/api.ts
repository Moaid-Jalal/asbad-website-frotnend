// Contact form API functions

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  note: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  data?: ContactFormData;
}

export interface ContactFormError {
  message: string;
  field?: string;
}

/**
 * Validates contact form data
 */
export function validateContactForm(data: ContactFormData): ContactFormError | null {
  if (!data.name.trim()) {
    return { message: 'الاسم مطلوب', field: 'name' };
  }

  if (!data.email.trim()) {
    return { message: 'البريد الإلكتروني مطلوب', field: 'email' };
  }

  if (!data.email.includes('@')) {
    return { message: 'البريد الإلكتروني غير صالح', field: 'email' };
  }

  if (!data.subject.trim()) {
    return { message: 'الموضوع مطلوب', field: 'subject' };
  }

  if (!data.note.trim()) {
    return { message: 'الرسالة مطلوبة', field: 'note' };
  }

  return null;
}

/**
 * Submits contact form data
 * In a real application, this would send data to a backend API
 * For now, we'll simulate the API call
 */
export async function submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
  try {
    // Validate the form data
    const validationError = validateContactForm(data);
    if (validationError) {
      return {
        success: false,
        message: validationError.message
      };
    }

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In a real application, you would make an HTTP request here
    // For example:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // });
    //
    // if (!response.ok) {
    //   throw new Error('Failed to submit form');
    // }
    //
    // return await response.json();

    // For demo purposes, we'll simulate success
    console.log('Form submitted successfully:', data);

    return {
      success: true,
      message: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
      data: data
    };

  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.'
    };
  }
}

/**
 * Clears form data
 */
export function clearContactForm(): ContactFormData {
  return {
    name: '',
    email: '',
    subject: '',
    note: ''
  };
}