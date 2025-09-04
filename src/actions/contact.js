export const handleContactSubmission = async (formData) => {
  try {
    // Convert FormData to object
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Add a submission ID and timestamp
    formObject.submissionId = Math.floor(Math.random() * 1000);
    formObject.submittedAt = new Date().toLocaleString();

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formObject }),
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      const errorData = await response.json();
      return { error: errorData.error || 'Something went wrong' };
    }
  } catch (error) {
    return { error: error.message };
  }
};
