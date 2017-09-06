const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(array, name) {
  kittens.push("Ralph")

}

function destructivelyPrependKitten(array, name) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop()
}
