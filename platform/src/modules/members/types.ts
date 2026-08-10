export type MembershipState = 'Activa' | 'Suspendida'

export type Member = {
  id: number
  name: string
  email: string
  phone: string
  plan: string
  paymentStatus: string
  nextPayment: string
  membershipState: MembershipState
}

export type MemberDetail = {
  member: Member & { joinedAt: string }
  payments: Array<{
    amount: number
    method: string
    paidAt: string
    nextPayment: string
    receiptNumber: string
  }>
  attendance: Array<{
    id: number
    attendedAt: string
    registeredBy: string
  }>
}

export type MemberUpdate = Pick<Member, 'name' | 'email' | 'phone' | 'plan'>
