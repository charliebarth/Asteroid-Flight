class UserSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :rounds
end