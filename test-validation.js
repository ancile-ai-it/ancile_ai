// Test the updated phone validation
const { contactFormSchema } = require('./src/lib/validation.ts');

// Test cases for the phone validation
const testCases = [
  // Valid US numbers (10 digits, no country code)
  { phone: '5551234567', expected: true, description: 'Valid US: raw 10 digits' },
  { phone: '(555) 123-4567', expected: true, description: 'Valid US: formatted' },

  // Invalid: too many digits (US should be 10)
  { phone: '+15551234567', expected: false, description: 'Invalid: wrong country code format' },
  { phone: '55512345678', expected: false, description: 'Invalid: 11 digits US' },
  { phone: '555123456', expected: false, description: 'Invalid: 9 digits US' },
  { phone: 'abc', expected: false, description: 'Invalid: non-numeric' },

  // Valid international numbers
  { phone: '+441234567890', expected: true, description: 'Valid international: +44 (UK)' },
  { phone: '+91234567890', expected: true, description: 'Valid international: +91 (India)' },

  // Invalid international numbers
  { phone: '+4441234567890', expected: false, description: 'Invalid: +444 (invalid country)' },
  { phone: '+442345678', expected: false, description: 'Invalid: too few digits international' },

  // Empty phone (optional)
  { phone: '', expected: true, description: 'Valid: empty (optional)' },
  { phone: undefined, expected: true, description: 'Valid: undefined (optional)' },
];

console.log('Testing Phone Number Validation:\n');

testCases.forEach((test, index) => {
  try {
    const formData = {
      name: 'Test User',
      email: 'test@example.com',
      company: 'Test Company',
      phone: test.phone,
      message: 'Test message'
    };

    const result = contactFormSchema.safeParse(formData);
    const phoneValid = !result.error || !result.error.errors.some(err => err.path.includes('phone'));

    const status = phoneValid === test.expected ? '✅' : '❌';
    console.log(`${status} Test ${index + 1}: "${test.phone}"`);
    console.log(`   Expected: ${test.expected}, Got: ${phoneValid}`);
    console.log(`   ${test.description}\n`);

  } catch (error) {
    console.log(`❌ Test ${index + 1}: ERROR - ${error.message}\n`);
  }
});
