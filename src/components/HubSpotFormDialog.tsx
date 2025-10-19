import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface HubSpotFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HubSpotFormDialog = ({ open, onOpenChange }: HubSpotFormDialogProps) => {
  useEffect(() => {
    if (open) {
      // Load HubSpot script if not already loaded
      if (!document.querySelector('script[src*="hsforms.net"]')) {
        const script = document.createElement("script");
        script.src = "https://js-na2.hsforms.net/forms/embed/244155876.js";
        script.defer = true;
        document.body.appendChild(script);
      }
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Get Started with ChiliDocs</DialogTitle>
        </DialogHeader>
        <div
          className="hs-form-frame"
          data-region="na2"
          data-form-id="ec88f27b-d2ef-4030-bf76-74337c156f7f"
          data-portal-id="244155876"
        />
      </DialogContent>
    </Dialog>
  );
};

export default HubSpotFormDialog;
