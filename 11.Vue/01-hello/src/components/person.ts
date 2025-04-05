export default {
    name: 'Person',
    data() {
        return {
            name: "John",
            age: 18
        }
    },
    methods: {
        getInfo() {
            return "John is 18 years old."
        }
    }
}