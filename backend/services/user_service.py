from models.user import User

class UserService:
    def __init__(self):
        # Simulamos un almacenamiento en memoria usando un diccionario
        self.users = {}
        self.next_user_id = 1

    def create_user(self, name, description, duration, developers):
        user_id = self.next_user_id
        self.next_user_id += 1
        user = User(user_id, name, description, duration, developers)
        self.users[user_id] = user
        return user

    def get_user(self, user_id):
        return self.users.get(user_id)

    def update_user(self, user_id, name, description, duration, developers):
        if user_id in self.users:
            user = self.users[user_id]
            user.name = name
            user.description = description
            user.duration = duration
            user.developers = developers
            return True
        return False

    def delete_user(self, user_id):
        if user_id in self.users:
            del self.users[user_id]
            return True
        return False
