import List "mo:core/List";

actor {
  type CarrierSignup = {
    companyName : Text;
    workEmail : Text;
    phoneNumber : Text;
    mcOrUsdotNumber : Text;
    fleetSize : Nat;
    hiringNeeds : Text;
  };

  let carrierSignups = List.empty<CarrierSignup>();

  public shared ({ caller }) func submitCarrierSignup(
    companyName : Text,
    workEmail : Text,
    phoneNumber : Text,
    mcOrUsdotNumber : Text,
    fleetSize : Nat,
    hiringNeeds : Text,
  ) : async () {
    let newSignup : CarrierSignup = {
      companyName;
      workEmail;
      phoneNumber;
      mcOrUsdotNumber;
      fleetSize;
      hiringNeeds;
    };
    carrierSignups.add(newSignup);
  };

  public query ({ caller }) func getAllCarrierSignups() : async [CarrierSignup] {
    carrierSignups.toArray();
  };
};
