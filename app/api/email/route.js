import nodemailer from "nodemailer";

const user = process.env.NODEMAILER_EMAIL;
const pass = process.env.NODEMAILER_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { name, company_name, email, phone } = body;
    await transporter.sendMail({
      from: user,
      to: user,
      subject: "New Client for LeadChef",
      text: "iska kya kaam",
      html: `<h1>Client Info</h1></br><p>Name: ${name}</p></br><p>Company: ${company_name}</p></br><p>Email: ${email}</p></br><p>Phone: ${phone}</p>`,
    });
    return new Response(JSON.stringify({ message: "success", status: 200 }));
  } catch (error) {
    return new Response(JSON.stringify({ message: "error", error }));
  }
}
