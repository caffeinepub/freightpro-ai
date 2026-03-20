import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export interface SignupFormData {
  companyName: string;
  workEmail: string;
  phoneNumber: string;
  mcOrUsdotNumber: string;
  fleetSize: bigint;
  hiringNeeds: string;
}

export function useSubmitCarrierSignup() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: SignupFormData) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitCarrierSignup(
        data.companyName,
        data.workEmail,
        data.phoneNumber,
        data.mcOrUsdotNumber,
        data.fleetSize,
        data.hiringNeeds,
      );
    },
  });
}
