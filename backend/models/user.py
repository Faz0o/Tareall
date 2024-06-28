class User:
    def __init__(self, user_id, name, description, duration, developers):
        self.user_id = user_id
        self.name = name
        self.description = description
        self.duration = duration
        self.developers = developers


    def serialize(self):
        return {
            'user_id': self.user_id,
            'name': self.name,
            'description': self.description,
            'duration': self.duration,
            'developers': self.developers
        }
