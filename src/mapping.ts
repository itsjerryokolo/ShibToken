import { BigInt } from "@graphprotocol/graph-ts"
import { ShibToken, Transfer, Approval } from "../generated/ShibToken/ShibToken"
import { 
  Contract
} from "../generated/schema"

export function handleTransfer(event: Transfer): void {

  let contract = Contract.load(event.transaction.hash.toHexString())
  
  let shibToken = ShibToken.bind(event.address)

  if (contract == null) {
    contract = new Contract(event.transaction.hash.toHexString())
  }

  contract.name = shibToken._name
  contract.totalSupply = shibToken.totalSupply()
  contract.save()
}

export function handleApproval(event: Approval): void {}
