from flask import jsonify

def user_response(user):
    response = {
        'status': 'success',
        'user': {
            'name': user.name,
            'description': user.description,
            'duration': user.duration,
            'developers': user.developers
        }
    }
    return jsonify(response)
