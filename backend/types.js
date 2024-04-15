const zod = require('zod');

const createCard = zod.object({
    name: zod.string(),
    info: zod.string(),
    interest: zod.object({
        interest1: zod.string(),
        interest2: zod.string(),
        interest3: zod.string(),
    }),
    linkedin: zod.string(),
    twitter: zod.string(),
})

const updateCard = zod.object({
    id: zod.string()
})

module.exports = {
    createCard,
    updateCard
}