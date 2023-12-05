export default function Index() {
  async function send(e) {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/send');
      const resJson = await res.json();
      console.log(resJson);
    }
    catch(e) {
      console.error(e);
    }
  }

  return (
    <form onSubmit={send}>
      <button type="submit">Send email</button>
    </form>
  )
}