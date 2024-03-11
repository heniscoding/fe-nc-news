export function formatAPIDate() {
    const date = new Date();
    
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: '2-digit', 
    };
    
    return date.toLocaleString('en-US', options);
}