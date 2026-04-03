import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface EnquiryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EnquiryModal = ({ open, onOpenChange }: EnquiryModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl font-bold text-foreground">
            Talk to an Expert
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Fill in your details and our lead specialist will get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form
          className="space-y-4 mt-2"
          onSubmit={(e) => {
  sendEmail(e);
  onOpenChange(false); // closes modal
}}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
              <Input name="user_name" placeholder="Your name" className="bg-background border-border rounded-lg h-10" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <Input name="user_email" type="email" placeholder="you@company.com" className="bg-background border-border rounded-lg h-10" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
            <Input name="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-background border-border rounded-lg h-10" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">What leads are you looking for?</label>
            <Textarea
              name="message"    
              placeholder="Tell us about your requirements, target audience, region, etc."
              rows={4}
              className="bg-background border-border rounded-lg resize-none"
            />
          </div>
          <Button type="submit" className="btn-primary-glow rounded-full px-8 h-11 text-sm w-full">
            <Send className="w-4 h-4 mr-2" />
            Submit Enquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
const sendEmail = async (e) => {
  e.preventDefault();

  const data = {
    name: e.target.user_name.value,
    email: e.target.user_email.value,
    phone: e.target.phone.value,
    message: e.target.message.value,
    subject: "New Enquiry Form"
  };

  try {
    await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    alert("Enquiry sent successfully!");
    e.target.reset();
  } catch (error) {
    alert("Failed to send enquiry");
  }
};
export default EnquiryModal;
