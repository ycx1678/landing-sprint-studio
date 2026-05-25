# Prompt Recipes

## Custom Review Reply

```text
Write a public reply to this customer review for [business type].
Tone: [friendly/premium/concise/apologetic].
Constraints:
- Under 90 words.
- Do not argue with the customer.
- Do not mention private customer details.
- Do not make legal, medical, financial, or guaranteed outcome claims.
- Include a next step only if appropriate.

Review:
[paste review]
```

## Complaint Recovery

```text
Draft a calm customer service reply.
Business: [business]
Situation: [what happened]
Customer feeling: [frustrated/disappointed/confused/angry]
Resolution available: [refund/exchange/rebook/manager follow-up/none]
Tone: accountable but not overpromising.
Length: 70-110 words.
Avoid: blame, excuses, private details, legal admissions, medical or safety claims.
```

## Instagram DM

```text
Turn this rough note into a helpful Instagram DM reply.
Use short lines and a warm tone.
Include one clear next step.

Business context: [context]
Rough answer: [answer]
Customer message: [message]
```

## Korean Reply

```text
아래 고객 메시지에 대한 답변을 한국어로 작성해줘.
톤: 친절하지만 과장 없이 전문적으로.
길이: 3-5문장.
주의:
- 개인정보를 공개하지 말 것
- 의료/법률/금융 판단을 하지 말 것
- 확정적 보장 표현을 쓰지 말 것
- 다음 행동을 하나만 명확히 안내할 것

업종: [업종]
고객 메시지: [메시지]
상황: [상황]
```

## Staff Tone Normalizer

```text
Rewrite this reply so it sounds consistent with our brand.
Brand voice: [friendly/premium/concise]
Keep the facts unchanged.
Remove defensiveness.
Make the next step clear.

Draft:
[paste draft]
```

## Sensitive Situation Check

```text
Review this customer reply for risk before sending.
Flag anything that could sound like:
- a legal admission,
- medical/financial/legal advice,
- a guaranteed outcome,
- a privacy issue,
- blame or defensiveness.

Then suggest a safer version under 90 words.

Draft:
[paste draft]
```

